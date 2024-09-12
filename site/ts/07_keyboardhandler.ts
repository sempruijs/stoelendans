function handlekeyboardinput(event: KeyboardEvent): void     {
    const key = event.key;
    
    if (event.key === ' ') {
        next_question()  ;
        next_mc_question()
      }



}


window.addEventListener('keydown', handlekeyboardinput);
