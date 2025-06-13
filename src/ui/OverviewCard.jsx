function OverviewCard({ label, value, icon: Icon, color, bg }) {
    return (
        <div className="flex items-center justify-between p-4 rounded-lg shadow bg-white border">
            <div>
                <h3 className="text-sm text-gray-500">{label}</h3>
                <p className="text-3xl font-bold text-gray-800">{value}</p>
            </div>
            <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${bg} ${color}`}
            >
                <Icon className="w-5 h-5" />
            </div>
        </div>
    );
}

export default OverviewCard;
