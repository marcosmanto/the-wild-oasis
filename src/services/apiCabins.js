import supabase, { supabaseUrl } from '@/services/supabase'

export async function getCabins() {
  // prettier-ignore
  const { data, error } = await supabase
    .from('cabins')
    .select('*')
    .order('id', { ascending: true})

  if (error) {
    console.error(error)
    throw new Error('Cabins could not be loaded')
  }

  return data
}

export async function createEditCabin(newCabin, id) {
  // check if the image is already uploaded
  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl)

  // generate a random name for the image
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', '')

  // generate the image path
  const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

  let query = supabase.from('cabins')

  if (!id) {
    // create a new cabin
    query = query.insert([{ ...newCabin, image: imagePath }])
  } else {
    // edit an existing cabin
    query = query.update({ ...newCabin, image: imagePath }).eq('id', id)
  }

  const { data, error } = await query.select().single()

  if (error) {
    console.error(error)
    throw new Error(`${id ? 'Cabin could not be edited' : 'Cabin could not be created'}`)
  }

  // avoid upload if the image already exists
  if (hasImagePath) return data

  //Upload image
  const { error: storageError } = await supabase.storage.from('cabin-images').upload(imageName, newCabin.image)

  if (storageError) {
    await supabase.from('cabins').delete().eq('id', data[0].id)
    console.error(storageError)
    throw new Error('Cabin image could not be uploaded')
  }

  return data
}

export async function deleteCabin(id) {
  // Create an AbortController for timeout
  const controller = new AbortController()
  const timeoutId = setTimeout(() => controller.abort(), 10000)

  try {
    const { data, error } = await supabase.from('cabins').delete().eq('id', id).select().abortSignal(controller.signal)

    // Check if data is null or empty array - this indicates no rows were affected
    if (!error && (!data || data.length === 0)) {
      throw new Error('Permission denied: Cannot delete cabin')
    }

    if (error) {
      throw new Error(error.message)
    }

    return data
  } catch (err) {
    controller.abort()
    if (err.message?.startsWith('AbortError')) {
      const timeoutError = new Error('Request timeout')
      timeoutError.timeout = true
      throw timeoutError
    }
    throw err
  } finally {
    clearTimeout(timeoutId)
  }
}
