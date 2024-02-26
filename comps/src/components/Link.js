import useNavigation from '../hooks/use-navigation';
import classNames from 'classnames';

function Link({ to, children }) {

const { navigate } = useNavigation();

const classes = classNames('text-blue-500');

const handleClick = (event) => {
    //allow users to open tab using keyboard shortcuts
    if (event.metaKey || event.ctrlKey) {
        return;
    }
    //stops the total page refresh
    event.preventDefault();
    navigate(to);

}

    return <a className={classes} href={to} onClick={ handleClick }>{children}</a>;

}

export default Link;