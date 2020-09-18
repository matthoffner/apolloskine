const usePreventLeave = () => {
    const listener = e => {
        e.preventDefault();
        e.returnValue = ''; // magic code for Chrome
    };

    const enablePrevent = () => window.addEventListener('beforeunload', listener);
    const disablePrevent = () => window.removeEventListener('beforeunload', listener);

    return [enablePrevent, disablePrevent];
};

export default usePreventLeave;
