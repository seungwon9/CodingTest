import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);

		int n = sc.nextInt();
		int b = 1;
		int cnt = 0;
		if (n == 1)
			System.out.println(1);
		else {
			while (b < n) {
				b = b + (cnt * 6);
				cnt++;
			}
			System.out.println(cnt);
		}
	}
}