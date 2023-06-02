import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc=new Scanner(System.in);
		
		String s=sc.next();
		int[] arr=new int[26];
		
		s=s.toUpperCase();
		for(int i=0;i<s.length();i++) {
			char c=s.charAt(i);
			arr[c-'A']++;
		}
		
		int max=-1;
		char ch=' ';
		for(int i=0;i<26;i++) {
			if(arr[i]>max) {
				max=arr[i];
				ch=(char)(i+'A');
			}
			else if(arr[i]==max) {
				ch='?';
			}
		}
		System.out.println(ch);
	}
}