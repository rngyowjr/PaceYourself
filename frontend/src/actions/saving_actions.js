import * as SavingApiUtil from '../util/saving_util';

export const SAVING_ANNUAL = "SAVING_ANNUAL";

const savingsByYear = payload => {
    return {
        type: SAVING_ANNUAL,
        payload
    }
};

export const savingAnnually = data => dispatch => 
    SavingApiUtil.savingAnnually(data)
        .then(savings => dispatch(savingsByYear(savings)));