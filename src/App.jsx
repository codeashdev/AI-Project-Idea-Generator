import React, {useContext} from 'react'

import Header from './components/header/Header'
import { SelectLanguage, SelectPlatform } from './components/select/Select'
import { UserInput } from './components/userInput/UserInput'
import Footer from './components/footer/Footer'
import { Modal } from './components/modal/Modal'

import { ProjectContext } from './context/projectContext'
import { fetchResponse } from './fetchResponse/fetchRespone'

const App = () => {
  const { prompt, setResponses, setLoading, platform } = useContext(ProjectContext);
  const handleGenerate = () => {
   
        fetchResponse(prompt,setResponses,setLoading)
  }
 
  return (
    <div className='flex flex-col min-h-screen justify-between bg-[#343541] font-serif'>
      <main className='container mx-auto px-3 pb-12'>
      <Header />
     
      <div className='flex flex-row justify-center xs:flex-col'>
      <SelectPlatform />
     {platform&& <SelectLanguage /> }
     
      </div>
      <UserInput />
      <div className='flex items-center justify-center color-[#0D1117]'>
      <Modal handleGenerate={handleGenerate}/>
      </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
