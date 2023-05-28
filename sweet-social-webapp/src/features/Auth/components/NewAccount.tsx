import { Button, Result } from "antd";
import { FunctionComponent, useEffect, useState } from "react";

interface NewAccountProps {

}

const NewAccount: FunctionComponent<NewAccountProps> = () => {
    const [timer, setTimer] = useState(60);
    const [isCounting, setIsCounting] = useState(true);

    useEffect(() => {
        let interval: any;

        if (isCounting) {
            interval = setInterval(() => {
                setTimer((prevTimer) => {
                    if (prevTimer === 0) {
                        clearInterval(interval);
                        setIsCounting(false);
                        return prevTimer;
                    } else {
                        return prevTimer - 1;
                    }
                });
            }, 1000);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isCounting]);

    const onResend = () => {
        setTimer(60)
        setIsCounting(true)
    }

    return (
        <Result
            title="EMAIL VERIFICATION"
            subTitle="An email verification was send to your email, please check your email !"
            extra={
                <Button type="primary" key="console" disabled={isCounting} onClick={onResend}>
                    Resend email ({timer})
                </Button>
            }
        />
    );
}

export default NewAccount;