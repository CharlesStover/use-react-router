// @ts-ignore
import { useContext, useEffect } from 'react';

// @ts-ignore
import { __RouterContext, RouteComponentProps } from 'react-router';
import useForceUpdate from 'use-force-update';

interface UseRouter {
  (): RouteComponentProps<{}>;
}

interface VoidFunction {
  (): void;
}

const useRouter: UseRouter = <T = {}>(): RouteComponentProps<T> => {
  const forceUpdate: VoidFunction = useForceUpdate();
  const routerContext: RouteComponentProps<T> = useContext(__RouterContext);
  useEffect(
    (): VoidFunction =>
      routerContext.history.listen(forceUpdate),
    [ routerContext ]
  );
  return routerContext;
};

export default useRouter;
