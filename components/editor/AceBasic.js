import AceEditor from 'react-ace'

import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/theme-github'
import 'ace-builds/src-noconflict/ext-language_tools'

const AceBasic = () => {
  function onChange(newValue) {
    console.log('change', newValue)
  }

  return (
    <>
      {/* editor */}
      <AceEditor
        mode="javascript"
        theme="github"
        onChange={onChange}
        name="Ace_Basic"
        editorProps={{ $blockScrolling: true }}
      />
    </>
  )
}

export default AceBasic
