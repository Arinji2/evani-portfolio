import Image from "next/image";
import type { ProjectSchemaType } from "@/lib/data";
import { getProxyURL } from "@/lib/utils";

export default function ArtCard({ data }: { data: ProjectSchemaType }) {
	const { title, description, expand } = data;
	const { height, width, drive_id } = expand.image;
	return (
		<div className="mb-6 flex h-fit w-full break-inside-avoid flex-col items-end justify-start gap-2">
			<div
				className="relative h-auto w-full "
				style={{
					aspectRatio: `${width} / ${height}`,
				}}
			>
				<Image src={getProxyURL(drive_id).toString()} alt="project" fill />
			</div>
			<h2 className="font-title text-2xl text-black">{title}</h2>
			<p className="font-content font-light text-black text-lg">
				{description}
			</p>
		</div>
	);
}
