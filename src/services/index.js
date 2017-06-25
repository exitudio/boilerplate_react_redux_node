import getItem from './getItem'
export function initServices(app){
  console.log("init service...")
  app.use('/services',getItem)
}


