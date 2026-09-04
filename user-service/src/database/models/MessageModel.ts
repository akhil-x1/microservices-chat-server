import mongoose, {Schema,Document} from "mongoose"

enum Status{
    NotDelivered = "NotDelivered",
    Delivered = "Delivered",
    Seen = "Seen"
}