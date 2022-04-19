import * as utils from '../utils/utils';
import './AuthTest.css';
export default function AuthTest() {
	const utilExports = Object.keys(utils);
	const vars = ['NODE_ENV', 'REACT_APP_BACKEND', ...utilExports];

	return (
		<div className='auth-test-box'>
			<dl>
				{vars.map((v, i) => (
					<div key={i}>
						<dt>{v}</dt>
						<dd>{process.env[v] ?? utils[v]}</dd>
					</div>
				))}
			</dl>
		</div>
	);
}
