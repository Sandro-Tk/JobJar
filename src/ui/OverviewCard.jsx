function OverviewCard({ card }) {
    return (
        <div className="flex items-center justify-between p-4 rounded-lg shadow bg-white border">
            <div>
                <h3 className="text-sm text-gray-500">{card.label}</h3>
                <p className="text-3xl font-bold text-gray-800">{card.value}</p>
            </div>
            <div
                className={`flex items-center justify-center w-10 h-10 rounded-full ${card.bg} ${card.color}`}
            >
                <card.icon className="w-5 h-5" />
            </div>
        </div>
    );
}

export default OverviewCard;
