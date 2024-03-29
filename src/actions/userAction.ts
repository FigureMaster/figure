import { request } from '../utils/axios';
import { USER_URL, PROJECT_URL, NOTICE_URL} from "../components/common/CommonConstants";

export function signUpUser(dataToSubmit) {
    return request('post', USER_URL + '/signUp', dataToSubmit);
}

export function loginUser(dataToSubmit) {
    return request('post', USER_URL + '/login', dataToSubmit);
}

export function getUserProjects() {
    const token = sessionStorage.getItem('isAuthorized');
    return request('get', `${USER_URL}${PROJECT_URL}?token=${token}`, undefined);
}

export function getUserNotices(userId: number) {
    return request('get', `${USER_URL}/${userId}${NOTICE_URL}`, '');
}
