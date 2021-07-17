import { useRouter } from 'next/router';
import HomePage from '../../src/components/Home';

const User = () => {
  const router = useRouter()
  const { communityId } = router.query

  return (
    <>
        <HomePage githubUser={communityId}/>
    </>
)
}

export default User