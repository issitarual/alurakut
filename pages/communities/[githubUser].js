import { useRouter } from 'next/router';
import AllCommunities from '../../src/components/AllCommunities';
const User = () => {
  const router = useRouter()
  const { githubUser } = router.query

  return (
    <>
        <AllCommunities githubUser={githubUser}/>
    </>
)
}

export default User