import { LocationState } from 'history';
import { Context, useContext, useEffect } from 'react';
import { __RouterContext, RouteComponentProps, StaticContext } from 'react-router';
import useForceUpdate from 'use-force-update';

type AnyContext = Context<RouteComponentProps<any, any, any>>;

const INCORRECT_VERSION_ERROR: Error =
  new Error('use-react-router may only be used with react-router@^5.');

const MISSING_CONTEXT_ERROR: Error =
  new Error('useReactRouter may only be called within a <Router /> context.');

export default function useRouter<
  P extends { [K in keyof P]?: string } = {},
  C extends StaticContext = StaticContext,
  S = LocationState,
>(): RouteComponentProps<P, C, S> {

  // If this version of react-router does not support Context,
  if (!__RouterContext) {
    throw INCORRECT_VERSION_ERROR;
  }

  // If the react-router Context is not a parent Component,
  const context: RouteComponentProps<P, C, S> =
    useContext<RouteComponentProps<P, C, S>>(
      __RouterContext as AnyContext as Context<RouteComponentProps<P, C, S>>,
    );
  if (!context) {
    throw MISSING_CONTEXT_ERROR;
  }

  const forceUpdate: VoidFunction = useForceUpdate();
  useEffect(
    (): VoidFunction =>
      context.history.listen(forceUpdate),
    [ context ],
  );
  return context;
}
