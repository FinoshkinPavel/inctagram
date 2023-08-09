import {AuthPage} from '@/src/components/ui/auth-page/AuthPage';
import TimeManagementImage from '@/src/assets/images/time-management-image';

export const InvalidLinkVerification = () => {
    return <AuthPage title="Email verification link invalid"
                     text="Looks like the verification link has expired. Not to worry, we can send the link again"
                     nameButton="Resend link"
    >{<TimeManagementImage/>}</AuthPage>
};
