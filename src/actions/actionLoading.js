export function loadingStarted(){
  return { type: 'LOADING_STARTED', loading: true }; 
}
export function loadingFinished(){
  return { type: 'LOADING_FINISHED', loading: false }; 
}