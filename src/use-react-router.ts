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

const useRouter: UseRouter = (): RouteComponentProps<{}> => {
  const forceUpdate: VoidFunction = useForceUpdate();
  const routerContext: RouteComponentProps<{}> = useContext(__RouterContext);
  useEffect(
    (): VoidFunction =>
      routerContext.history.listen(forceUpdate),
    [ routerContext ]
  );
  return routerContext;
};

export default useRouter;
