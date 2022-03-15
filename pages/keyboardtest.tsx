import Head from 'next/head';
import { useEffect } from 'react';
import Layout from '../components/layout';

const KeyboardTester = () => {

  useEffect(() => {    
    document.body.addEventListener('keydown', (event: KeyboardEvent) => {
      let key: string = event.key;
      let code: string = event.code;
      if (key != 'Meta' || code != 'MetaLeft') {
        event.preventDefault();
      }

      const keyOutput = document.getElementById('currentKeyPress');
      const codeOutput = document.getElementById('currentCodePress');
      
      document.getElementById(key)?.classList.add('bg-green-300', 'border-b-4');
      document.getElementById(code)?.classList.add('bg-green-300', 'border-b-4');
      document.getElementById(key)?.classList.remove('border-t-4');
      document.getElementById(code)?.classList.remove('border-t-4');
      if (keyOutput) keyOutput.innerHTML = '<span>Key: </span>' + key;
      if (codeOutput) codeOutput.innerHTML = '<span>Code: </span>' + code;
    })
    document.body.addEventListener('keyup', (event: KeyboardEvent) => {
      let key: string = event.key;
      let code: string = event.code;
      document.getElementById(key)?.classList.remove('border-b-4');
      document.getElementById(code)?.classList.remove('border-b-4');
      document.getElementById(key)?.classList.add('border-t-4');
      document.getElementById(code)?.classList.add('border-t-4');
    })
  }, []);

  const keyBase = 'h-10 p-0.5 border-8 border-t-4 border-black border-opacity-10 rounded-sm float-left mx-1 my-1 relative shadow-sm shadow-gray-500';
  const keyBaseWidth = ' w-10';
  const keyFirst = ' clear-left';
  const keyLast = ' mr-0';
  const keyTabDelete = ' w-16';
  const keyCapslock = ' w-20';
  const keyEnter = ' w-18';
  const keyShiftLeft = ' w-24';
  const keyShiftRight = ' w-14';
  const keySpace = ' w-64';
  const keyBlank = ' invisible'
  const keyModBottom = ' w-14'
  const keyDisabled = ' bg-red-300 border-t-8'

  return (
    <Layout>
      <Head>
        <title>Keyboard Tester - MECHKEY TUTORIALS</title>
      </Head>
      <div id='keyboard' className='container w-screen m-auto flex flex-col justify-center align-middle py-32'>
        <div className='w-full m-auto flex flex-row justify-evenly text-lg text-black font-leagueSpartan'>
          <div id='currentKeyPress'>Key: </div>
          <div id='currentCodePress'>Code :</div>
        </div>
        <ul className='w-max m-auto text-xs text-black font-leagueSpartan list-none capitalize relative p-1 border-4 border-black border-opacity-50 rounded-md shadow-md shadow-gray-500'>
          {/* <li className={keyBase + keyBaseWidth + keyLayered} id=''></li>
          <li className={keyBase + keyBaseWidth} id='F1'>F1</li>
          <li className={keyBase + keyBaseWidth} id='F2'>F2</li>
          <li className={keyBase + keyBaseWidth} id='F3'>F3</li>
          <li className={keyBase + keyBaseWidth} id='F4'>F4</li>
          <li className={keyBase + keyBaseWidth} id='F5'>F5</li>
          <li className={keyBase + keyBaseWidth} id='F6'>F6</li>
          <li className={keyBase + keyBaseWidth} id='F7'>F7</li>
          <li className={keyBase + keyBaseWidth} id='F8'>F8</li>
          <li className={keyBase + keyBaseWidth} id='F9'>F9</li>
          <li className={keyBase + keyBaseWidth} id='F10'>F10</li>
          <li className={keyBase + keyBaseWidth} id='F11'>F11</li>
          <li className={keyBase + keyBaseWidth + keyLast} id='F12'>F12</li> */}
          <li className={keyBase + keyBaseWidth + keyFirst} id='Escape'>Esc</li>
          <li className={keyBase + keyBaseWidth} id='Digit1'>1</li>
          <li className={keyBase + keyBaseWidth} id='Digit2'>2</li>
          <li className={keyBase + keyBaseWidth} id='Digit3'>3</li>
          <li className={keyBase + keyBaseWidth} id='Digit4'>4</li>
          <li className={keyBase + keyBaseWidth} id='Digit5'>5</li>
          <li className={keyBase + keyBaseWidth} id='Digit6'>6</li>
          <li className={keyBase + keyBaseWidth} id='Digit7'>7</li>
          <li className={keyBase + keyBaseWidth} id='Digit8'>8</li>
          <li className={keyBase + keyBaseWidth} id='Digit9'>9</li>
          <li className={keyBase + keyBaseWidth} id='Digit0'>0</li>
          <li className={keyBase + keyBaseWidth} id='Minus'>-</li>
          <li className={keyBase + keyBaseWidth} id='Equal'>=</li>
          <li className={keyBase + keyTabDelete} id='Backspace'>Backspace</li>
          <li className={keyBase + keyBaseWidth} id='Backquote'>`</li>
          {/* <li className={keyBase + keyBaseWidth + keyLast} id='Insert'>Insert</li> */}
          <li className={keyBase + keyTabDelete + keyFirst} id='Tab'>Tab</li>
          <li className={keyBase + keyBaseWidth} id='KeyQ'>q</li>
          <li className={keyBase + keyBaseWidth} id='KeyW'>w</li>
          <li className={keyBase + keyBaseWidth} id='KeyE'>e</li>
          <li className={keyBase + keyBaseWidth} id='KeyR'>r</li>
          <li className={keyBase + keyBaseWidth} id='KeyT'>t</li>
          <li className={keyBase + keyBaseWidth} id='KeyY'>y</li>
          <li className={keyBase + keyBaseWidth} id='KeyU'>u</li>
          <li className={keyBase + keyBaseWidth} id='KeyI'>i</li>
          <li className={keyBase + keyBaseWidth} id='KeyO'>o</li>
          <li className={keyBase + keyBaseWidth} id='KeyP'>p</li>
          <li className={keyBase + keyBaseWidth} id='BracketLeft'>[</li>
          <li className={keyBase + keyBaseWidth} id='BracketRight'>]</li>
          <li className={keyBase + keyBaseWidth} id='Backslash'>\</li>
          <li className={keyBase + keyBaseWidth} id='Delete'>Delete</li>
          {/* <li className={keyBase + keyBaseWidth + keyLast} id='AudioVolumeMute'>Mute</li> */}
          <li className={keyBase + keyCapslock + keyFirst} id='CapsLock'>Caps lock</li>
          <li className={keyBase + keyBaseWidth} id='KeyA'>a</li>
          <li className={keyBase + keyBaseWidth} id='KeyS'>s</li>
          <li className={keyBase + keyBaseWidth} id='KeyD'>d</li>
          <li className={keyBase + keyBaseWidth} id='KeyF'>f</li>
          <li className={keyBase + keyBaseWidth} id='KeyG'>g</li>
          <li className={keyBase + keyBaseWidth} id='KeyH'>h</li>
          <li className={keyBase + keyBaseWidth} id='KeyJ'>j</li>
          <li className={keyBase + keyBaseWidth} id='KeyK'>k</li>
          <li className={keyBase + keyBaseWidth} id='KeyL'>l</li>
          <li className={keyBase + keyBaseWidth} id='Semicolon'>;</li>
          <li className={keyBase + keyBaseWidth} id='Quote'>&apos;</li>
          <li className={keyBase + keyEnter} id='Enter'>Enter</li>
          <li className={keyBase + keyBaseWidth} id='PageUp'>PgUp</li>
          {/* <li className={keyBase + keyBaseWidth + keyLast} id='AudioVolumeUp'>Vol+</li> */}
          <li className={keyBase + keyShiftLeft + keyFirst} id='ShiftLeft'>Shift</li>
          <li className={keyBase + keyBaseWidth} id='KeyZ'>z</li>
          <li className={keyBase + keyBaseWidth} id='KeyX'>x</li>
          <li className={keyBase + keyBaseWidth} id='KeyC'>c</li>
          <li className={keyBase + keyBaseWidth} id='KeyV'>v</li>
          <li className={keyBase + keyBaseWidth} id='KeyB'>b</li>
          <li className={keyBase + keyBaseWidth} id='KeyN'>n</li>
          <li className={keyBase + keyBaseWidth} id='KeyM'>m</li>
          <li className={keyBase + keyBaseWidth} id='Comma'>,</li>
          <li className={keyBase + keyBaseWidth} id='Period'>.</li>
          <li className={keyBase + keyBaseWidth} id='Slash'>/</li>
          <li className={keyBase + keyShiftRight} id='ShiftRight'>Shift</li>
          <li className={keyBase + keyBaseWidth} id='ArrowUp'>Up</li>
          <li className={keyBase + keyBaseWidth} id='PageDown'>PgDn</li>
          {/* <li className={keyBase + keyBaseWidth + keyLast} id='AudioVolumeDown'>Vol-</li> */}
          <li className={keyBase + keyModBottom + keyFirst} id='ControlLeft'>Ctrl</li>
          <li className={keyBase + keyModBottom} id='MetaLeft'>Win</li>
          <li className={keyBase + keyModBottom} id='AltLeft'>Alt</li>
          <li className={keyBase + keySpace} id='Space'>&nbsp;</li>
          <li className={keyBase + keyBaseWidth} id='AltRight'>Alt</li>
          <li className={keyBase + keyBaseWidth + keyDisabled} id='Fn'>Fn</li>
          <li className={keyBase + keyBaseWidth} id='ControlRight'>Ctrl</li>
          <li className={keyBase + keyBaseWidth} id='ArrowLeft'>Left</li>
          <li className={keyBase + keyBaseWidth} id='ArrowDown'>Down</li>
          <li className={keyBase + keyBaseWidth} id='ArrowRight'>Right</li>
        </ul>
      </div>
    </Layout>
  )
}

export default KeyboardTester;