import supabase from './supabase.js'

const list = document.getElementById('message-list')
const form = document.getElementById('message-form')
const input = document.getElementById('message-input')

async function loadMessages() {
  const { data, error } = await supabase
    .from('GUESTBOOK')
    .select('*')
    .order('created_at', { ascending: false })

  list.innerHTML = ''
  if (data) {
    data.forEach((msg) => {
      const li = document.createElement('li')
      li.textContent = msg.message
      list.appendChild(li)
    })
  } else {
    console.error(error)
  }
}

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  const content = input.value.trim()
  if (content) {
    const { error } = await supabase
      .from('GUESTBOOK')
      .insert([{ message: content }])
    if (error) console.error(error)
    else {
      input.value = ''
      loadMessages()
    }
  }
})

loadMessages()
