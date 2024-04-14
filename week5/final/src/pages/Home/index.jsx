import { useTweets } from '../../hooks/useTweets';
import HomeFeed from '../../components/HomeFeed';
import { useAuth } from '../../hooks/useAuth';

import styles from './Home.module.css';

export default function Home() {
	const { token } = useAuth();

	const { tweets, post, loading, error } = useTweets(token);

	return (
		<main className={styles.home}>
			<HomeFeed post={post} error={error} tweets={tweets} />
		</main>
	);
}
