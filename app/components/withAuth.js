import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import { Spinner } from '@chakra-ui/react';

const withAuth = (WrappedComponent) => {
  const WithAuth = (props) => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.push('/login');
        } else {
          setLoading(false);
        }
      });

      return () => unsubscribe();
    }, [router]);

    if (loading) {
      return <div className=' w-full h-screen flex items-center justify-center'>
        <Spinner size='lg' className=' w-12 h-12' />
        </div>;
    }

    return <WrappedComponent {...props} />;
  };

  WithAuth.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`;
  return WithAuth;
};

const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
};

export default withAuth;
