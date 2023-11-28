import Button from '../../ui/Button/Button';
import styles from './ConfirmForm.module.scss';

const ConfirmForm = ({
    message,
    onConfirm,
    onCancel,
}: {
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}) => {
    return (
        <form>
            <h1>{message}</h1>
            <div className={styles.buttons}>
                <Button
                    type="submit"
                    onClick={onConfirm}
                    appearance="danger"
                >
                    Yes
                </Button>
                <Button
                    onClick={onCancel}
                    appearance="primary"
                >
                    No
                </Button>
            </div>
        </form>
    );
};

export default ConfirmForm;
