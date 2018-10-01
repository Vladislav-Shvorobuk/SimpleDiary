package base_package.modal;

public class ResponseMessage {

    private String status;
    private String errorMessage;

    public ResponseMessage(String status) {
        this.status = status;
    }


    public static ResponseMessage okMessage(String status){
        return new ResponseMessage(status);
    }
    public static ResponseMessage errorMessage(String errorMessage){
        return new ResponseMessage(errorMessage);
    }


    public String getStatus() {
        return status;
    }
    public String getErrorMessage(){
        return errorMessage;
    }
}
