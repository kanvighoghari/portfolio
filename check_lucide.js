import * as lucide from "lucide-react"
const keys = Object.keys(lucide)
console.log(keys.filter(k => k.toLowerCase().includes('github') || k.toLowerCase().includes('linkedin')))
