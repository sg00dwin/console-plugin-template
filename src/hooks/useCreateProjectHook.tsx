import * as React from 'react';
import { useModal } from '@openshift-console/dynamic-plugin-sdk';
import CreateProjectModal from '../components/FooPage';

const useCreateProjectHook = () => {
  const launchModal = useModal();
  return React.useCallback(
    () => launchModal(CreateProjectModal, null),
    [launchModal],
  );
};

export default useCreateProjectHook;
