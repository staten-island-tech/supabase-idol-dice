import { useRouter } from 'vue-router'
export function randomNumber(maximum) {
    const number = Math.floor(Math.random() * maximum + 1);
    return number;
  }
const router = useRouter()
export function takeToBuy(){
  router.push({ path: '/buyanim'})
}
export function takeToPrest(){
  router.push({ path: '/prestanim'})
}