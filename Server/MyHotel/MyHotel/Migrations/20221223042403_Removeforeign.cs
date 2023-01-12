using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MyHotel.Migrations
{
    public partial class Removeforeign : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Feedbacks_AspNetUsers_CustomerId",
                table: "Feedbacks");

            migrationBuilder.DropForeignKey(
                name: "FK_Feedbacks_Rooms_RoomId",
                table: "Feedbacks");

            migrationBuilder.DropIndex(
                name: "IX_Feedbacks_CustomerId",
                table: "Feedbacks");

            migrationBuilder.DropIndex(
                name: "IX_Feedbacks_RoomId",
                table: "Feedbacks");

            migrationBuilder.DropColumn(
                name: "CustomerId",
                table: "Feedbacks");

            migrationBuilder.DropColumn(
                name: "RoomId",
                table: "Feedbacks");

            migrationBuilder.AddColumn<string>(
                name: "Topic",
                table: "Feedbacks",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Topic",
                table: "Feedbacks");

            migrationBuilder.AddColumn<string>(
                name: "CustomerId",
                table: "Feedbacks",
                type: "nvarchar(450)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "RoomId",
                table: "Feedbacks",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Feedbacks_CustomerId",
                table: "Feedbacks",
                column: "CustomerId");

            migrationBuilder.CreateIndex(
                name: "IX_Feedbacks_RoomId",
                table: "Feedbacks",
                column: "RoomId");

            migrationBuilder.AddForeignKey(
                name: "FK_Feedbacks_AspNetUsers_CustomerId",
                table: "Feedbacks",
                column: "CustomerId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Feedbacks_Rooms_RoomId",
                table: "Feedbacks",
                column: "RoomId",
                principalTable: "Rooms",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
