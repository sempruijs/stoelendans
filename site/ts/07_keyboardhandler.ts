function handlekeyboardinput(event: KeyboardEvent): void     {
    const key = event.key;
    
    if (key === ' ') {
        next_question()  ;
      }



}


window.addEventListener('keydown', handlekeyboardinput);