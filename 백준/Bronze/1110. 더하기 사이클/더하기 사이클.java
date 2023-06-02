import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		BufferedReader br=new BufferedReader(new InputStreamReader(System.in));
		int n=Integer.parseInt(br.readLine());
		int a=n,i=0;
		while(true) {
			n=(n%10*10+(n/10+n%10)%10);
			i++;
			if(n==a)
				break;
		}
		System.out.println(i);
	}
}
