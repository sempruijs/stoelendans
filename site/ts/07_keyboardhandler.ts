function handlekeyboardinput(event: KeyboardEvent): void     {
    const key = event.key;
    
    if (event.key === ' ') {
        next_question()  ;
      }



}
function handlekeyboardinputmc(event: KeyboardEvent): void     {
  const key = event.key;
  
  if (event.key === ' ') {
    next_mc_question()
    ;
    }



}

window.addEventListener('keydown', handlekeyboardinput);
window.addEventListener('keydown', handlekeyboardinputmc);