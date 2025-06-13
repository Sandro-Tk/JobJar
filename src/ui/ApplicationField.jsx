function ApplicationField({ label, value }) {
    return (
        <p>
            <span className="font-medium">{label}:</span> {value}
        </p>
    );
}

export default ApplicationField;
