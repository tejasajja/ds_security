import { authOptions } from '@/lib/auth'
import {getServerSession} from 'next-auth'
const page = async () =>{
    const session = await getServerSession(authOptions)
    return <div>Welome to admin page {session?.user.username}</div>
}
export default page