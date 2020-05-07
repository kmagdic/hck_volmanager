package com.hck.volmanager.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

public class ResourceNotFoundHttpException extends Exception{

	private static final long serialVersionUID = 1L;

	public ResourceNotFoundHttpException(String message){
    	super(message);
    }
}
