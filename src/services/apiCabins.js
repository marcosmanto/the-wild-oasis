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

export async function createCabin(newCabin) {
  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll('/', '')
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`

  // prettier-ignore
  const { data, error } = await supabase
    .from('cabins')
    .insert([{...newCabin, image: imagePath}])
    .select()

  if (error) {
    console.error(error)
    throw new Error('Cabin could not be created')
  }

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
  // prettier-ignore
  const { data, error } = await supabase
    .from('cabins')
    .delete()
    .eq('id', id)

  if (error) {
    console.error(error)
    throw new Error('Cabin could not be deleted')
  }

  return data
}
