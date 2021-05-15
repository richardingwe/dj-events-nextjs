import Link from 'next/link';
import { useContext } from 'react';
import styles from '@/styles/Header.module.css';
import Search from './Search';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import AuthContext from '@/context/AuthContext';

const Header = () => {

    const { user } = useContext(AuthContext);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href='/'>
                    Dj Events
                </Link>
            </div>

            <Search />

            <nav>
                <ul>
                    <li>
                        <Link href='/events'>
                            Events
                        </Link>
                    </li>
                    {user ? (
                        // If logged in
                        <>
                            <li>
                                <Link href='/events/add'>
                                    <a>Add Event</a>
                                </Link>
                            </li>
                            <li>
                                <Link href='/account/dashboard'>
                                    <a>Dashboard</a>
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={() => logout()}
                                    className='btn-secondary btn-icon'
                                >
                                    <FaSignOutAlt /> Logout
                            </button>
                            </li>
                        </>
                    ) : (
                        // If logged out
                        <>
                            <li>
                                <Link href='/account/login'>
                                    <a className='btn-secondary btn-icon'>
                                        <FaSignInAlt /> Login
                                    </a>
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
