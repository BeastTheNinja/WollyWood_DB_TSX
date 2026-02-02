interface TitleProps {
    title: string;
}


export const Title = ({ title }: TitleProps) => {

    return (
        <>
            <h1 className="text-[#D97852] text-[32px] font-[TitilliumWeb] ml-5 font-bold text-left">{title}</h1>
        </>
    )
}