import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-green-200 py-4 text-center">
      <div className="flex justify-center space-x-4">
        <a href="https://facebook.com" className="text-gray-800 hover:text-gray-600">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.936 3.62 8.993 8.307 9.751v-6.897H7v-2.97h3.307v-2.256c0-3.272 1.958-5.088 4.947-5.088 1.43 0 2.819.255 2.819.255v3.114h-1.587c-1.565 0-2.053.971-2.053 1.968v2.363H17l-.331 2.97h-3.308v6.897C18.38 20.993 22 16.936 22 12z"
            />
          </svg>
        </a>
        <a href="https://instagram.com" className="text-gray-800 hover:text-gray-600">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm5.725 9.09l-.252 1.897c-.063.484-.729.838-1.414.838h-1.844c-.93 0-1.244-.604-1.333-.938h-.084l-.082.938h-2.247l.067-.747c-.022-.539-.067-1.203-.067-1.886 0-2.496 1.359-3.568 3.232-3.568 1.721 0 2.832.868 2.832 2.423 0 .949-.504 1.669-1.178 1.952.928.21 1.639.98 1.639 1.952 0 1.391-1.159 2.488-2.939 2.488-5.437 0-7.151-3.428-7.151-6.308 0-2.744 2.139-5.176 6.081-5.176 3.211 0 5.585 1.952 5.585 4.752 0 3.42-1.68 6.163-5.283 6.163-1.032 0-2.001-.533-2.339-1.161l.592-.002z"
            />
          </svg>
        </a>
        <a href="https://google.com" className="text-gray-800 hover:text-gray-600">
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M17 2H7a5 5 0 00-5 5v10a5 5 0 005 5h10a5 5 0 005-5V7a5 5 0 00-5-5zm3 15a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3h10a3 3 0 013 3v10zM12 6a4 4 0 100 8 4 4 0 000-8zm5.7 9.3c-.3.4-.8.7-1.3.7H8.6c-.5 0-1-.3-1.3-.7-.2-.3-.3-.7-.3-1.1V12c0-.8.7-1.5 1.5-1.5h6.7c.8 0 1.5.7 1.5 1.5v2.2c0 .4-.1.8-.3 1.1z"
            />
          </svg>
        </a>
      </div>
      <p className="text-gray-800 mt-2">
        Follow us on social media for updates and promotions!
      </p>
      <p className="text-gray-800 mt-2">
        &copy; {new Date().getFullYear()} Stackies shop. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer