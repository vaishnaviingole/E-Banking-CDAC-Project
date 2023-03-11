package com.app.custom_exception;

public class InsufficientBalanceException extends Exception {
	 public InsufficientBalanceException(String message) {
	        super(message);
	    }
}
