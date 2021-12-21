class TicketsController < ApplicationController
    def create
        ticket = Ticket.create!(ticket_params)
        render json: ticket, status: :created
    end

    def show
        ticket = Ticket.find(params[:id])
        render json: ticket, status: :ok
    end

    def destroy
        ticket = Ticket.find(params[:id])
        ticket.destroy
        render json: ticket
    end

    def admin_tickets
        tickets = Ticket.all.where(admin_id: nil)
        render json: tickets, status: :ok
    end

    def claim
        ticket = Ticket.find(params[:id])
        ticket.update(claim_params)
        render json: ticket
    end

    private

    def ticket_params
        params.permit(:subject, :description, :created_date, :author, :submitter_id)
    end

    def claim_params
        params.permit(:admin_id, :status)
    end
end
