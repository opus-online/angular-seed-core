export const forceControllerAsVm = (config) => {
    config.controllerAs = 'vm';
    return config;
};

export const forceAbstract = (config) => {
    config.abstract = true;
    return config;
};
