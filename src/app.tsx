import "./app.css";

import { Content } from "~/components/Content/Content";
import { General } from "~/components/General/General";
import { Page } from "~/components/Page/Page";

export default function App() {
	return (
		<>
			<Page>
				<General />
				<Content />
			</Page>
		</>
	);
}
