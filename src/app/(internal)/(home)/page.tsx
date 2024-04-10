const CHATS = [
  {
    id: 1,
    message: 'Hello',
    response: 'Hi',
  },
  {
    id: 2,
    message: 'How are you?',
    response: 'I am good',
  },
  {
    id: 3,
    message: 'What are you doing?',
    response: 'I am chatting with you',
  },
  {
    id: 4,
    message: 'What is your name?',
    response: 'My name is Chatbot',
  },
  {
    id: 5,
    message: 'What is your age?',
    response: 'I am a bot',
  },
  {
    id: 6,
    message: 'What is purpose of your life?',
    response: 'I am here to chat with you',
  },
]

const Home = () => {
  return (
    <div className="flex h-full flex-col-reverse px-2">
      <div className="">
        {CHATS.map((chat) => (
          <div key={chat.id} className="">
            <div className="">
              <div className="">
                <div className="flex">
                  <div className="">{chat.message}</div>
                  <div className="flex-1 px-1 h-bar"></div>
                </div>
                <div className="flex justify-end">{chat.response}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home
