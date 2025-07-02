import supabase from './supabase.js'

const list = document.getElementById('message-list')
const form = document.getElementById('message-form')
const nicknameInput = document.getElementById('nickname-input')
const messageInput = document.getElementById('message-input')

// 메시지 불러오기
async function loadMessages() {
  console.log('asd');
  const { data, error } = await supabase
    .from('GUESTBOOK')
    .select('*')
    .order('created_at', { ascending: false })

  list.innerHTML = ''
  if (data) {
    data.forEach((item) => {
      const li = document.createElement('li')
      li.innerHTML = `<strong>${item.nickname}:</strong> ${item.message}`
      list.appendChild(li)
    })
  } else {
    console.error(error)
  }
}

// 메시지 등록
form.addEventListener('submit', async (e) => {
  e.preventDefault()
  const nickname = nicknameInput.value.trim()
  const message = messageInput.value.trim()

  if (!nickname || !message) return

  const { error } = await supabase
    .from('GUESTBOOK')
    .insert([{ nickname, message }])

  if (error) {
    console.error('추가 실패:', error)
  } else {
    nicknameInput.value = ''
    messageInput.value = ''
    loadMessages()
  }
})

loadMessages()
