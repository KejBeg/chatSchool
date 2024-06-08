export default function UsersError({ message }) {
	return (
		<ul id="users-page">
			<li
				key="usersError"
				id="usersError">
				<span>{message}</span>
			</li>
		</ul>
	);
}

