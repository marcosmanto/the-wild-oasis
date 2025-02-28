import supabase from '@/services/supabase'

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
  // prettier-ignore
  const { data, error } = await supabase
    .from('cabins')
    .insert([newCabin])
    .select()

  if (error) {
    console.error(error)
    throw new Error('Cabin could not be created')
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
