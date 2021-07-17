import { useRouter } from 'next/router';
import HomePage from '../../src/components/Home';

const User = () => {
  const router = useRouter()
  const { githubUser } = router.query

  return (
    <>
        <HomePage githubUser={githubUser}/>
    </>
)
}

export default User