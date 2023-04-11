import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const ClassCard = ({ classItem }) => {
    const classUrl = `/classes/${classItem.id}`;

    return (
        <Link to={classUrl} className="class-card-link">
            <Card className="class-card">
                <CardMedia
                    component="img"
                    alt={classItem.name}
                    height="140"
                    image={classItem.images[0].path}
                    title={classItem.name}
                    className="class-card-media"
                />
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {classItem.name} - {classItem.number}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {classItem.way_to}
                    </Typography>
                    <Typography variant="body2" component="p">
                        Владелец: {classItem.owner.name}
                    </Typography>
                    {classItem.destination === 1 && (
                        <Typography variant="body2" component="p">
                            Предметы:{" "}
                            {classItem.subjects.map((subject) => subject.name).join(", ")}
                        </Typography>
                    )}
                </CardContent>
            </Card>
        </Link>
    );
};

export default ClassCard;
